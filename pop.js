//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wonderful work!"
compliments[1]="Super brain!"
compliments[2]="Simply amazing!"
compliments[3]="AWESOME!"
compliments[4]="Pure math magic!"
compliments[5]="Incredible!"
compliments[6]="Absolute genius!"
compliments[7]="Excellent!"
compliments[8]="FABULOUS!"
compliments[9]="Mathematical expert!"
compliments[10]="Brilliant!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Evaluate the following numerical expression: 3 * (15 - 4 * 2) + 6"
choice1[1]="72"
choice1[2]="264"
choice1[3]="27"
choice1[4]="43"

question[2]="Which expression matches the written description: Add 14 and 12, then multiply the sum by half of 8?"
choice2[1]="(14 + 12) + (8 / 2)"
choice2[2]="(14 + 12) * (8 / 2)"
choice2[3]="14 + 12 * (8 / 2)"
choice2[4]="14 + (12 * 8) / 2"

question[3]="Consider two numerical patterns. Pattern A starts at 0 and adds 3. Pattern B starts at 0 and adds 12. What is the relationship between the corresponding terms in the two patterns?"
choice3[1]="Pattern B is four more than Pattern A."
choice3[2]="Pattern B is twelve more than Pattern A."
choice3[3]="Pattern B is four times Pattern A."
choice3[4]="Pattern B is three times Pattern A."

question[4]="In the number 4,552.13, how does the value of the 5 in the hundreds place compare to the value of the 5 in the tens place?"
choice4[1]="It is 100 times as much."
choice4[2]="It is 10 times as much."
choice4[3]="It is 1/10 as much."
choice4[4]="It is 1/100 as much."

question[5]="Which of the following lists of decimals is correctly ordered from least to greatest?"
choice5[1]="0.35, 0.305, 0.3, 0.035"
choice5[2]="0.3, 0.035, 0.35, 0.305"
choice5[3]="0.035, 0.3, 0.305, 0.35"
choice5[4]="0.035, 0.305, 0.3, 0.35"

question[6]="A school district orders new library books. There are 34 schools in the district, and each school will receive 275 books. How many total books is the district ordering?"
choice6[1]="1,925"
choice6[2]="8,350"
choice6[3]="9,250"
choice6[4]="9,350"

question[7]="A local bakery baked 1,452 cookies. They package the cookies into boxes that hold exactly 24 cookies each. Any leftover cookies that cannot fill a box are kept for the display case. How many cookies are kept for the display case?"
choice7[1]="10"
choice7[2]="60"
choice7[3]="21"
choice7[4]="12"

question[8]="Anna buys a notebook for $4.75 and two pens for $1.35 each. She pays the cashier with a $10.00 bill. How much change should she receive?"
choice8[1]="$5.25"
choice8[2]="$2.55"
choice8[3]="$3.90"
choice8[4]="$7.45"

question[9]="A community garden is shaped like a rectangle. It has a length of 3.6 meters and a width of 2.5 meters. What is the area of the garden in square meters?"
choice9[1]="0.9 square meters"
choice9[2]="9 square meters"
choice9[3]="12.2 square meters"
choice9[4]="90 square meters"

question[10]="A roll of crafting ribbon is 18.4 inches long. A teacher cuts it into 4 equal pieces for her students. How long is each piece of ribbon?"
choice10[1]="0.46 inches"
choice10[2]="4.1 inches"
choice10[3]="4.6 inches"
choice10[4]="46 inches"

solution[1]="c"
solution[2]="b"
solution[3]="c"
solution[4]="b"
solution[5]="c"
solution[6]="d"
solution[7]="d"
solution[8]="b"
solution[9]="b"
solution[10]="c"
