n=153
x=n
y=n
count=0
while n>0:
    r=n%10
    count=count+1
    n=n//10
print(count)
sum=0
while x>0:
    r=x%10
    sum=sum+(r**count)
    x=x//10
    
if sum==y:
    print('amstrong number')
else:
    print('not')