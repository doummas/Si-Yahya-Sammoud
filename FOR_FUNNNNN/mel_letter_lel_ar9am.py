def n_list():
    global list1,list2
    list1 = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    list2 =[ "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    
def think():
    number = input("Choose an number between 0 and 99999 in letter\n")
    if number in list2:
        i=0
        while i<len(list2) and list2[i]!=number :
            i+=1
        print(i+10)
        
    elif number in list1:
        i=0
        while i<len(list1) and list1[i]!=number :
            i+=1
        print(i)
        
    elif number.find("hundred") == -1 and number.find("thousand") == -1 :
        acharate = find(number)
        a7ade = number[number.find(" ")+1:]
        i=0
        i=find(a7ade)
        print(str(acharate)+str(i))
    elif number.find("hundred") != -1 and number.find("thousand") == -1:
        acharate_ou_a7ad = number[number.find("hundred")+len("hundred")+1:]
        acharate = find(acharate_ou_a7ad)
        a7ade = find(acharate_ou_a7ad[acharate_ou_a7ad.find(" ")+1:])
        mi2et = number[0:number.find(" ")]
        j=find(mi2et )
        print(str(j)+str(acharate)+str(a7ade))
    elif number.find("thousand ") != -1:
        acharate_ou_a7ad = number[number.find("hundred")+len("hundred")+1:]
        acharate = find(acharate_ou_a7ad)
        a7ade = find(acharate_ou_a7ad[acharate_ou_a7ad.find(" ")+1:])
        alef = number[0:number.find(" ")]
        mi2et = number[number.find("thousand")+len("thousand")+1:number.find(" hundred")]
        j=find(mi2et)
        k=find(alef)
        
        if alef.find("ty")!=-1:
            
            alff=number[len(alef)+1:number.find(" thousand")]
            f=find(alff)
            print(str(k)+str(f)+str(j)+str(acharate)+str(a7ade))
        else:
            print(str(k)+str(j)+str(acharate)+str(a7ade))
            
            
        
#fama chwaya bugs fe ar9am tw nsl7hom mara o5ra tw 1:21 d9i9a ou ena n9ra 8 8odwa        

        
        
        
def find(n):
    i=0
    if n=="":
        return 0
    while i < len(list1) and ((n[0:2]) not in (list1[i][0:2])):
        i+=1
    return i



    
    
    
    
        
n_list()       
think()
