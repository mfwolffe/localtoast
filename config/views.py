import json
from django.views import View
from django.conf import settings
from django.views.generic import TemplateView
from guest_user.decorators import allow_guest_user
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.mixins import LoginRequiredMixin


class HomeView(LoginRequiredMixin, TemplateView):
    template_name = "index.html"

    @allow_guest_user
    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data.update({
            "username": self.request.user.username,
        })
        return context_data
