from django import template
from django.utils.html import strip_tags

register = template.Library()

@register.filter
def strip_html_except_p(value):
    """
    Strips HTML tags from the input value, except <p> tags.
    """
    return strip_tags(value, 'p')

# custom_filters.py


@register.filter
def get_key(dictionary, key):
    return dictionary.get(key, {'count_rating': 'N/A', 'average_rating': 'N/A'})
