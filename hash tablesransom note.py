import math
import os
import random
import re
import sys
from typing import Pattern
from collections import Counter

def checkMagazine(magazine, note):
  
    if (Counter(note) - Counter(magazine)) == {}:
        print("Yes") 
    else:
        print("No")
        
    

    


if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    magazine = input().rstrip().split()

    note = input().rstrip().split()

    checkMagazine(magazine, note)

