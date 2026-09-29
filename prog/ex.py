from pickle import *
def saisir():
    global n
    n=int(input("Donner N\n"))
    while n>20 or n<2:
        n=int(input("Donner N autre fois\n"))
        
def remplir(n):
    global reel
    reel=open("C:/4Si/nombres.fch","wb")
    for i in range(n):
        val=float(input("donner reel\n"))
        dump(val, reel)
    reel.close()
        
def afficher(n,reel):
    reel=open("C:/4Si/nombres.fch","rb")
    t=0
    for i in range(n):
        r = load(reel)
        t+=r
        print(r)
    print("moyen= ",t/n)
    reel.close()
        
saisir()
remplir(n)
afficher(n,reel)
    