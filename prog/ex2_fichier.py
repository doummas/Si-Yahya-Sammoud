from pickle import *

def remplir():
    n="O"
    eleve = open("C:/4Si/eleve.dat","wb")
    e=dict()
    e["note"]=dict()
    while n=="O":
            e=dict()
            e["genre"] = input("Donner le genre\n")
            while ((e["genre"]!= "F") and (e["genre"] != "M")):
                e["genre"] = input("Donner le genre autre fois\n")
            e["nom"] = input("Donner le nom d'eleve\n")
            e["note"]=dict()
            e["note"]["note1"] = float(input("Donner le note\n"))
            while (e["note"]["note1"]>21 or e["note"]["note1"]<=0):
                e["note"]["note1"] = float(input("Donner le note\n"))
            e["note"]["note2"] = float(input("Donner le note\n"))
            while (e["note"]["note2"]>21 or e["note"]["note2"]<=0):
                e["note"]["note2"] = float(input("Donner le note\n"))
                
            e["note"]["note3"] = float(input("Donner le note\n"))
            while (e["note"]["note3"]>21 or e["note"]["note3"]<=0):
                e["note"]["note3"] = float(input("Donner le note\n"))
            e["moyen"] = (e["note"]["note1"] +e["note"]["note2"] +e["note"]["note3"]) /3
            
            dump(e,eleve)
            n=input("continuez (O/N?)")
            while (n!= "O" and n!="N"):
                n=input("continuez (O/N?)")
            
    eleve.close()
def afficher():
    eleve = open("C:/4Si/eleve.dat","rb")
    fin= False
    i=1
    mm=0
    nom=""
    while not fin:
        try:
            r= load(eleve)
            print("Eleve ",i)
            
            if r["moyen"] > 10:
                print("admis\n")
                print(r["nom"])
            if r["moyen"]>mm:
                mm=r["moyen"]
                nom=r["nom"]
            i+=1
        
        except:
            fin = True
    print(mm)
    print(nom)
    eleve.close()
        

            
remplir()
afficher()