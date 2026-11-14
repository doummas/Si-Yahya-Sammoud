from PyQt5.uic import loadUi
from PyQt5.QtWidgets import *
from pickle import *


def ajouter():
    f = open("client.dat","ab")
    idd=win.L1.text()
    tel=win.L2.text()
    if id == "" or tel == "":
        QMessageBox.critical(win,"erreur","Veuillez saisir les information")
    elif not(0<len(idd)<10 and alphanum(idd)):
        QMessageBox.critical(win,"erreur","Identiafiant invalid")
    elif (len(tel) !=8 or tel.isdecimal()==False):
        QMessageBox.critical(win,"erreur","Telephone invalid")
    else :
        e=dict()
        e["id"] = idd
        e["tel"]=tel
        e["genre"] = "Masculin"
        if win.R2.isChecked():
            e["genre"] = "Feminin"
        e["ville"] = win.C.currentText()
        e["etat"] = "non inscrit"
        if win.Ca.isChecked():
            e["etat"] = "inscrit"
        dump(e,f)
        QMessageBox.information(win,"info","ajoutation succes")
        f.close()
        
def alphanum(ch):
    i=0
    ch =ch.upper()
    while (i<len(ch) and ("A"<=ch[i]<="Z" or "0"<=ch[i]<="9")):
        i+=1
    return i== len(ch)


def afficher():
    f=open("client.dat","rb")
    fin = False
    i=1
    while fin == False:
        try:
            win.Ta.insertRow(i)
            win.Ta.setItem(i-1,0,QTableWidgetItem(""))
            win.Ta.setItem(i-1,1,QTableWidgetItem(e[""]))
            win.Ta.setItem(i-1,2,QTableWidgetItem(e[""]))
            win.Ta.setItem(i-1,4,QTableWidgetItem(e[""]))
            win.Ta.setItem(i-1,5,QTableWidgetItem(e[""]))
            e=load(f)
            win.Ta.insertRow(i)
            win.Ta.setItem(i,0,QTableWidgetItem(e["id"]))
            win.Ta.setItem(i,1,QTableWidgetItem(e["tel"]))
            win.Ta.setItem(i,2,QTableWidgetItem(e["genre"]))
            win.Ta.setItem(i,4,QTableWidgetItem(e["ville"]))
            win.Ta.setItem(i,5,QTableWidgetItem(e["etat"]))
            i+=1
        except :
            fin=True
    f.close()
app = QApplication([])
win = loadUi ("proto2023.ui")
win.show()
win.B1.clicked.connect (ajouter)
win.B2.clicked.connect (afficher)

app.exec_()