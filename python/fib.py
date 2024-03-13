n=5
a,b=0,1
sum=0
if n>=0:
   for i in range(0,n):
         print(sum,end=' ')
         a=b
         b=sum
         sum=a+b
else:
    print('invalid')
    
