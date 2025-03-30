
a, b = 1, 2
odd_sum = 0
limit = 10000000

while a <= limit:

    if a % 2 != 0:  
        odd_sum += a
    a, b = b, a + b  

print(odd_sum)