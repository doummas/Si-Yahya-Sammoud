f = open("C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/act1.txt", "r")
"""for line in f:
    print(line)"""
"""ch=f.read()
print(ch)"""
ch=f.readline()
i=0
while ch!="":
    if ch!="\n":
        print(ch," ",str(len(ch)-1))
        i=i+1

    ch=f.readline()
    
print("le nombre de line de chaine=",i)


f.close()