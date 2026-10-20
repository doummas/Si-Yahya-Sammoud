def saisir():
    n=int(input("Donner n\n"))
    return n
def remplir(ch,n):
    f = open(ch,'w')
    for i in range(n):
        ch=input("Donner ch\n")
        while not (verif(ch)):
            ch=input("Donner ch autre fois \n")
        f.write(ch+"\n")
    f.close()
        
def verif(ch):
    i=0
    while i<len(ch) and ch!="" and ch[0]!=" " and ch[len(ch)-1]!=" " and esp(ch)<=1:
        i+=1
    print(i)
    return len(ch)==i

def esp(ch):
    n=0
    for i in range(len(ch)):
        if ch[i]==" ":
            n+=1
    return n



def afficher(ch,n):
    f = open(ch,'r')
    ch=f.readline()
    for i in range(n):
        print(ch)
        ch=f.readline()
    f.close()
        
def rondance(ch):
    f = open(ch,"r")
    ch=f.read()
    ch=ch.upper()
    ph=""
    for i in range(n):
        if ("A"<=ch[i]<="Z") and ph.find(ch[i])==-1:
            ph+=ch[i]
    f.close()
    return len(ph)


def affiche2(ch):
    f = open(ch,"r")
    ch=f.readline()
    l=0
    while ch!="":
        ch=ch.upper()
        ph=""
        l+=1
        for i in range(len(ch)):
            if ("A"<=ch[i]<="Z") and ph.find(ch[i])==-1:
                ph+=ch[i]
    
        print("nombre des lettre dans le ligne",l," est",len(ph))
    f.close()
    
        
n=saisir()
ch="C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/t.txt"
remplir(ch,n)
afficher(ch,n)
print(rondance(ch))