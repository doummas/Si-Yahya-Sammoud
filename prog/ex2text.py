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
    ch1=f.readline()
    l=0
    while ch1!="":
        ch1=ch1.upper()
        ph=""
        l+=1
        for i in range(len(ch1)):
            if ("A"<=ch1[i]<="Z") and ph.find(ch1[i])==-1:
                ph+=ch1[i]
    
        print("nombre des lettre dans le ligne",l," est",len(ph))
        ch1=f.readline()
    f.close()
    
def remplir2(ch,ch2):
    f=open(ch,"r")
    f2=open(ch2,"w")
    ch1=f.readline()
    while ch1!="":
        ch1=ch1+" "
        ph=""
        while ch1!="":
            p=ch1.find(" ")
            md=ch1[0:p]
            ph = ph + inverser(md)+" "
            ch1 =ch1[p+1:]
        f2.write(ph[0:len(ph)-1])
        ch1=f.readline()
    f.close()
    f2.close()
    ff=open (ch2,"r")
    c=ff.readline()
    while c!="":
        print(c)
        c=ff.readline()
    ff.close()
    
  
def inverser(ch):
    ch1=""
    for i in range(len(ch)-1,-1,-1):
        ch1=ch1+ch[i]
    return ch1
    
def ajout(ch2):
    f=open(ch2,"a")
    f.write("\n Merci pour votre attention")
    f.close
        
n=saisir()
ch="C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/t.txt"
ch2="C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/tt.txt"
remplir(ch,n)
afficher(ch,n)
print(rondance(ch))
affiche2(ch)
remplir2(ch,ch2)