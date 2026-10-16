from pickle import *

def saisir():
    n=int(input("Donner n\n"))
    while not(3<n<40):
        n=int(input("Donner n autre fois\n"))
    return n
        
        
def remplir(n):
    f = open("C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/liste.dat", "wb")
    for i in range(n):
        e=dict()
        e["nom"] = input("Donner le nom\n")
        e["prenom"] = input("Donner le prenom\n")
        e["moyen"] = float(input("Donner le moyen\n"))
        while not (0<=e["moyen"]<=20):
            e["moyen"] = float(input("Donner le moyen autre fois\n"))
        dump(e,f)
    f.close()
            
            
def afficher(n):
    f = open("C:/Users/yahya/OneDrive/Desktop/Si Yahya Sammoud/prog/liste.dat", "rb")
    for i in range(n):
        r=load(f)
        if r["moyen"]>10:
            print(r["nom"] + " " + r["prenom"] + " " +str(r["moyen"]))
            
    f.close
    
    
    
n=saisir()
remplir(n)
afficher(n)