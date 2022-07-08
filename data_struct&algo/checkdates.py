#Extracts a collection of birth dates from the user and determines
#if each individual is of 21 years of age
from datetime import date

def main():
    bornBefore = date(6, 1, 1988)

    #extract birthdates from user and determine if 21 or older
    date = promptAndExtractDate()
    while date is not None:
        if date <= bornBefore:
            print("Is atleast 21 years of age:", date)
        date = promptAndExtractDate()

#Prompts for and Extracts the gregorian date components. Returns a
#date object or None when the user has finished entering dates.
def promptAndExtractDate():
    print("Enter a birth date. ")
    month = int(input("month (0 to quit):"))
    if month == 0:
        return None
    else:
        day = int( input("day: ") )
        year = int( input("year: ") )
        return date( month, day, year )

#Call the main routine
main()



    