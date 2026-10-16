from pickle import *
from numpy import *
def saisir():
    n=int(input("Donner n\n"))
    while n>50:
        n=int(input("Donner n autre fois\n"))
    return n

def remplir(T,n):
    for i in range (n):
        T[i] = input("Donner T["+str(i)+"]\n")
        while (len(T[i])>10) or not(verif(T[i])):
            T[i] = input("Donner T["+str(i)+"] autre fois\n")
            
            
def verif(ch):
    i=0
    ch=ch.upper()
    while i<len(ch) and ("A"<=ch[i]<="Z" or "0"<=ch[i]<="9"):
        i+=1
    return i==len(ch)


def remplir2(T,n):
    f = open("C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/liste.dat", "wb")
    for i in range(n):
        e=dict()
        e["nb_dec"] = verifnb(T[i])
        e["mention"] = calculer(e["nb_dec"])
        dump(e,f)
    f.close()
    
    
def verifnb(ch):
    
    ch1=""
    for i in range(n):
        if "0"<=ch[i]<="9":
            ch1+=ch[i]
            
    if ch1=="":
        return 19999999
    return ch1


def calculer(n):
    ch=str(n)
    spair=0
    simpair=0
    for i in range (len(ch)):
        if i %2==0:
            spair+=int(ch[i])
        else:
            simpair += int(ch[i])
            
    if abs(spair-simpair)%11==0:
        return (n,"est divisible par 11")
    else:
        return (n,"n'est pas divisible par 11")
    
def afficher(n):
    f = open("C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/liste.dat", "rb")
    for i in range (n):
        r=load(f)
        print(r["nb_dec"])
        print(r["mention"])
    f.close()
    
    
    
    
    
    
    
    
n=saisir()
T=array([str]*n)
remplir(T,n)
remplir2(T,n)
afficher(n)