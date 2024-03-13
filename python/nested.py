age=20
liscence=True
graduation=True
if age>=18:
    print("your eligible for driving")
    if liscence:
        print('happy driving')
    else:
        print('you cannot drive as ur below age')
    if graduation:
        print('good')
    else:
        print('your unfit')
else:
    print('your not eligible for driving')