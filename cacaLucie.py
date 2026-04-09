import turtle as tlt
tlt.fillcolor('antiquewhite')
tlt.begin_fill()
for i in range(4):
    tlt.forward(300)
    tlt.left(90)
tlt.end_fill()
tlt.up()
tlt.forward(150)
tlt.left(90)
tlt.forward(50)
tlt.right(90)

tlt.down()
tlt.color("black")
tlt.width(5)
tlt.fillcolor("peru")
for i in range(3):
    tlt.begin_fill()
    tlt.forward(100-33*i)
    for j in range(36):
        tlt.left(5)
        tlt.forward(2-0.5*i)
    tlt.forward(100-33*i)
    for j in range(36):
        tlt.left(5)
        tlt.forward(2-0.5*i)
    tlt.end_fill()
    tlt.left(180)
    tlt.up()
    for j in range(36):
        tlt.right(5)
        tlt.forward(2-0.5*i)
    tlt.forward(15)
    tlt.down()
    
tlt.forward(5)
tlt.begin_fill()
for j in range(36):
    tlt.left(5)
    tlt.forward(0.5)
tlt.forward(3)
for j in range(40):
    tlt.right(2)
    tlt.forward(0.2)
tlt.forward(3)
tlt.right(20)
tlt.backward(3)
for j in range(40):
    tlt.right(2)
    tlt.backward(0.2)
for j in range(36):
    tlt.left(5)
    tlt.backward(0.5)
tlt.end_fill()
tlt.up()

tlt.left(90)
tlt.forward(40)
tlt.down()
tlt.width(2)
tlt.fillcolor("white")
tlt.begin_fill()
for i in range(36):
    tlt.right(5)
    tlt.forward(0.5)
tlt.forward(10)
for i in range(36):
    tlt.right(5)
    tlt.forward(0.5)
tlt.forward(10)
tlt.end_fill()

tlt.fillcolor("black")
tlt.begin_fill()
for i in range(36):
    tlt.right(5)
    tlt.forward(0.5)
tlt.forward(2)
for i in range(36):
    tlt.right(5)
    tlt.forward(0.5)
tlt.end_fill()
tlt.up()


tlt.left(90)
tlt.forward(20)
tlt.left(90)
tlt.forward(8)
tlt.down()
tlt.fillcolor("white")
tlt.begin_fill()
for i in range(36):
    tlt.left(5)
    tlt.forward(0.5)
tlt.forward(10)
for i in range(36):
    tlt.left(5)
    tlt.forward(0.5)
tlt.forward(10)
tlt.end_fill()

tlt.fillcolor("black")
tlt.begin_fill()
for i in range(36):
    tlt.left(5)
    tlt.forward(0.5)
tlt.forward(2)
for i in range(36):
    tlt.left(5)
    tlt.forward(0.5)
tlt.end_fill()
tlt.up()
tlt.forward(40)