bal=100
choice=int(input('enter the choice:'))
if choice==1:
    print(' balance',bal)
if choice==2:
    amt=float(input('enter the amount:'))
    if amt<bal:
        print(' withdraw succesfull')
    else:
        print('insufficient balance')
if choice==3:
    dep=float(input('enter the amount:'))
    bal=bal+dep
    print(' deposit',bal)
else:
    print('invalid choice')