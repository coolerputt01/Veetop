import firebase_admin
from firebase_admin import credentials, firestore, auth


credential = credentials.Certificate("./veetop-a5fae-firebase-adminsdk-fbsvc-358e7f5443.json")
firebase_admin.initialize_app(credential)

db = firestore.client()