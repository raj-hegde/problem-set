#include <stdio.h>

void main(){

int fahr, celsius;
int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  printf("Conversion of Celsius to Fahrenheit\n");
  printf("Celsius\tFahrenheit\n");
  celsius = lower;
  while(celsius <= upper){
    fahr = (9 * celsius) / 5 + 32;
    printf("%5d\t%8d\n", celsius, fahr);
    celsius += step;
  }
}
