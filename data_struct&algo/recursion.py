def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(f"factorial is" , factorial(7))