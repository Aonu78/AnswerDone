from django.shortcuts import redirect
from django.urls import reverse

class AdminStaffRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the user is authenticated and is an admin or staff member
        if request.user.is_authenticated and (request.user.is_staff or request.user.is_superuser):
            # Redirect to the logout page
            return redirect(reverse('logout'))  # Assuming you have a named URL pattern for the logout page

        # Continue with the request processing
        response = self.get_response(request)
        return response
