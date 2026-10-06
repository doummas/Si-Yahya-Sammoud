from pickle import *

def remplir():
    n="N"
    eleve = open("C:/4Si/eleve.dat","rb")
    e=dict()
    while n=="N":
            e=dict()
            e["genre"] = input("Donner le genre\n")
            while ((e["genre"]!= "F") or (e["genre"] != "M")):
                e["genre"] = input("Donner le genre autre fois\n")
            e["nom"] = input("Donner le nom d'eleve\n")
            e["note"]["note1"] = int(input("Donner le note\n"))
            e["note"]["note2"] = int(input("Donner le note\n"))
            e["note"]["note3"] = int(input("Donner le note\n"))
            e["moyeng"] = (e["moyen3"] +e["moyen2"] +e["moyen1"]) /3
            
            n=input("continuez (O/N?)")
            while (n!= "O" or N!="N"):
                n=input("continuez (O/N?)")
            dump(e,eleve)
    eleve.close()
def afficher():
    eleve = open("C:/4Si/eleve.dat","rb")
    fin= False
    while not fin:
        try:
            r= load(eleve)
            print(e)
        except:
            fin = True
        

            
remplir()
afficher()