
def calculate():
    num1=int(input("enter first value:"))
    num2=int(input("enter second value:"))
    operation=input("enter operation:")
    if(operation=='+'):
        print("sum=",num1+num2)
    elif(operation=='-'):
        print("subtraction=",num1-num2)
    elif(operation=='*'):
        print("multiplication=",num1*num2)
    elif(operation=='/'):
        print("division=",num1/num2)
    elif(operation=='%'):
        print("modulus=",num1%num2)
    else:
        print("select the correct option")
    next=input("press enter if you want to do again(yes/no):")
    if(next=="yes"):
        calculate()
        
        

print("------------------------------")
print("select operation you want to perform")
print("enter  '+'  for addition")
print("enter  '-'  for subtraction")
print("enter  '/'  for division")
print("enter  '*'  for multiplication")
print("enter  '%'  for modulus")
print("********************")
calculate()

    
        



    


            



            
