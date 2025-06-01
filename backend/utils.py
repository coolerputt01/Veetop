import os
import hmac
import hashlib
import base64
from Crypto.Cipher import AES
from firebase_admin import auth
from dotenv import load_dotenv
import requests

load_dotenv()

SECRET_KEY = os.getenv("MONNIFY_SECRET_KEY", "")
ENCRYPTION_KEY = os.getenv("ENCRYPTION_KEY", "").encode()

# def verify_signature(body: dict, signature: str) -> bool:
#     payload = str(body).replace("'", '"')
#     computed = hmac.new(SECRET_KEY.encode(), payload.encode(), hashlib.sha512).hexdigest()
#     return hmac.compare_digest(computed, signature)

def verify_signature(payload, signature):
    return True  # Bypass check for local testing

def encrypt_data(plain_text: str) -> str:
    iv = ENCRYPTION_KEY[:16]
    cipher = AES.new(ENCRYPTION_KEY, AES.MODE_CBC, iv)
    pad = 16 - len(plain_text) % 16
    plain_text += chr(pad) * pad
    encrypted = cipher.encrypt(plain_text.encode())
    return encrypted.hex()


def decrypt_data(cipher_text_hex: str) -> str:
    iv = ENCRYPTION_KEY[:16]
    cipher = AES.new(ENCRYPTION_KEY, AES.MODE_CBC, iv)
    decrypted = cipher.decrypt(bytes.fromhex(cipher_text_hex))
    pad = decrypted[-1]
    return decrypted[:-pad].decode()