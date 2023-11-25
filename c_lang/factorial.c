#include <stdio.h>

// Function with recursion
int fact_recursive(int n)
{
    if (n == 0 || n == 1)
    {
        return 1;
    }
    else
    {
        return n * fact_recursive(n - 1);
    }
}

// Function without recursive
// This function returns value in the else statement even if there is no
// return statement need to look at that
int fact_nonrecursive(int n)
{
    int fact = 1;
    if (n == 0 || n == 1)
    {
        return 1;
    }
    else
    {
        for (int i = n; i > 0; i--)
        {
            fact = fact * i;
        }
    }
}

void main()
{
    printf("%d\n", fact_nonrecursive(4));
    printf("%d\n", fact_recursive(4));
}