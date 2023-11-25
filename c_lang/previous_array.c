#include <stdio.h>

int sum_arr(int arr[])
{
    int size = sizeof(arr) / sizeof(arr[0]);
    int sum = 0;
    int x[] = {};
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
        x[i] = sum;
    }
    return x;
}

void main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    printf("Output array: %d", sum_arr(arr));
}