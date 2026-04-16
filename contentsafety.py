from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
from azure.ai.contentsafety.models import AnalyzeTextOptions

# Azure credentials
endpoint = "https://contentsafety-20.cognitiveservices.azure.com/"
key = "AKeojj13BjXWxJpWQD0jYXszX9d1YgIOgTnUZq6OFFLSC2aG0mYtJQQJ99CDACNns7RXJ3w3AAAHACOGR3NS"

# Create client
client = ContentSafetyClient(endpoint, AzureKeyCredential(key))

# Text to analyze
text = "I will hurt you"

# Create request
request = AnalyzeTextOptions(text=text)

# Analyze text
response = client.analyze_text(request)

# Print results
for category in response.categories_analysis:
    print("Category:", category.category)
    print("Severity:", category.severity)