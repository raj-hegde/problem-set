#include <stdio.h>

int sum(int n)
{
    return (n == 0) ? 0 : ((n == 1) ? 1 : (n + sum(n - 1))); // This is compact way of writing code simple way is always preferred
}

void main()
{
    int x = 0;
    x = sum(3);
    printf("Sum = %d", x);
}