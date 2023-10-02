var ham=0
for ( ham = 0; breadCount>=2 && hamCount>=1; ham++) {
breadCount-=2 
hamCount-=1
}
displayThisText("Numbers of ham sandwich(es) : " + ham)
var tuna=0
for ( tuna = 0; breadCount>=2 && tunaCount>=1 && saladCount>=2; tuna++) {
breadCount-=2 
tunaCount-=1
saladCount-=2
}
displayThisText("Numbers of tuna sandwich(es) : " + tuna)
var vege=0
for ( vege = 0; breadCount>=2 && tomatoCount>=2 && saladCount>=1; vege++) {
breadCount-=2 
tomatoCount-=2
saladCount-=1
}
displayThisText("Numbers of vegetarian sandwich(es) : " + vege)
displayIngredients()