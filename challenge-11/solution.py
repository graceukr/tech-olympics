csv_data = """CustomerName, CustomerID, TransactionAmount, TransactionDate
Erika, C001, 120.00, 2024-03-01
Amelia, C002, 75.00, 2024-03-01
Jules, C003, 180.50, 2024-03-01
Erika, C001, 90.00, 2024-03-02
Quinn, C004, 55.00, 2024-03-02
Amelia, C002, 50.00, 2024-03-02
Frani, C005, 200.00, 2024-03-03
Jules, C003, 50.00, 2024-03-03
Henry, C003, 250.00, 2024-03-03
Cookies, C007, 300.00, 2024-03-04
Erika, C001, 110.00, 2024-03-04
Jules, C003, 220.00, 2024-03-04
Frani, C005, 125.00, 2024-03-05
Quinn, C004, 95.00, 2024-03-05
Amelia, C002, 250.00, 2024-03-05
Easha, C015, 55.00, 2024-03-08
Ayla, C009, 90.00, 2024-03-08
Will, C017, 30.00, 2024-03-09
Lorelei, C018, 25.00, 2024-03-09
Kevin, C019, 75.00, 2024-03-09
Owen, C020, 50.00, 2024-03-10
Liz, C021, 80.00, 2024-03-10"""

lines = csv_data.strip().split('\n')[1:]
distilled = []

for line in lines: 
    parts = line.split(',')
    amount = float(parts[2].strip())
    name = parts[0].strip()
    distilled.append([name, amount])


big_ticket_customers = []
for line in distilled:
    if line[1] > 100.0:
        if line[0] in big_ticket_customers:
            continue
        else:
            big_ticket_customers.append(line[0])

sums = {}

for line in distilled:
    if line[0] not in big_ticket_customers:
        continue
    else:
        if line[0] not in sums:
            sums[line[0]] = line[1]
        else:
            sums[line[0]] += line[1]

print('$${}')