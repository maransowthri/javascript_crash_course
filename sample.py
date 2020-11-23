a = 5

def change_me():
    global a
    a += 1

change_me()
print(a)