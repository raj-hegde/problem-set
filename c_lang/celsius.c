#include <stdio.h>

void main(){

int fahr, celsius;
int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  fahr = lower;
  printf("Conversion of fahrenheit to celsius\n");
  printf("Fahrenheit\tCelsius\n" );
  while (fahr <= upper) {
    celsius = 5 * (fahr - 32) / 9; /* why 5/9 is printed as 0 - because int division truncates anything after the decimal point */
    printf("%5d\t%12d\n", fahr, celsius);
    fahr += step;
  }
}
