#include <stdio.h>
void print(int i){
    printf("%d Eu nao vou conversar em sala de aula.\n", i);
    i++;
    if(i <= 1000) print(i);
}
void main(){
    int i = 1;
    print(i);
}