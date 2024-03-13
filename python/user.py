class VoteageError(Exception):
    pass
print('start of pgm')
age=int(input('enter age'))
if age<=18:
    try:
        raise VoteageError
    except(VoteageError):
        print('You cannot vote')
else:
    print('You can vote')
print('go to home')