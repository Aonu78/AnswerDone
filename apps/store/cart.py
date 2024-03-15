from decimal import Decimal
from django.conf import settings
from django.shortcuts import get_object_or_404
from .models import Product, Bundle
from ..core.models import Question_Answer

class Cart:
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def save(self):
        self.session.modified = True

    def add(self, item_type, item_id, quantity=1):
        item_id = str(item_id)
        key = f"{item_type}_{item_id}"  # Combine item_type and item_id to create a unique key
        if key not in self.cart:
            self.cart[key] = {'quantity': quantity, 'item_type': item_type, 'item_id': item_id}
        else:
            pass
            # self.cart[key]['quantity'] += quantity
        self.save()
    
    def remove(self, item_type, item_id):
        key_to_remove = f"{item_type}_{item_id}"  # Combine item_type and item_id to create the key
        if key_to_remove in self.cart:
            del self.cart[key_to_remove]
            self.save()

    def calculate_item_price(self, item):
        item_type = item['item_type']
        item_id = item['id']
        quantity = item['quantity']
        
        # Retrieve the price based on the item type and ID
        if item_type == 'note':
            product = Product.objects.filter(id=item_id).first()
        elif item_type == 'bundle':
            product = Bundle.objects.filter(id=item_id).first()
        elif item_type == 'question':
            product = Question_Answer.objects.filter(id=item_id).first()
        
        # Check if the product exists and if its price is a float
        if product and isinstance(product.price, float):
            return product.price * quantity
        else:
            return Decimal('0')  # Return 0 as the default price if the price is not available or not a float

    def __iter__(self):
        for key, item in self.cart.items():
            item_type = item.get('item_type')
            item_id = item.get('item_id')
            if item_type == 'note':
                try:
                    note = Product.objects.get(id=item_id)
                    item['note'] = note
                    item['id'] = note.id
                    item['total_price'] = self.calculate_item_price(item)
                    yield item
                except Product.DoesNotExist:
                    pass
            elif item_type == 'bundle':
                try:
                    bundle = Bundle.objects.get(id=item_id)
                    item['bundle'] = bundle
                    item['id'] = bundle.id
                    item['total_price'] = self.calculate_item_price(item)
                    yield item
                except Bundle.DoesNotExist:
                    pass
            elif item_type == 'question':
                try:
                    question = Question_Answer.objects.get(id=item_id)
                    item['question'] = question
                    item['id'] = question.id
                    item['total_price'] = self.calculate_item_price(item)
                    yield item
                except Question_Answer.DoesNotExist:
                    pass

    def __len__(self):
        return sum(item['quantity'] for item in self.cart.values())

    def get_total_cost(self):
        return sum(item['product'].price * item['quantity'] for item in self.cart.values())


    def clear(self):
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True

    def get_total_quantity(self):
        return sum(item['quantity'] for item in self.cart.values())
