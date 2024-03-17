def tower_of_hanoi(s, d, e, n):
    # Terminating condition
    if (n <= 0):
        return

    tower_of_hanoi(s, e, d, n-1)
    print(f"Move Disk-{n} from {s} to {d}")
    tower_of_hanoi(e, d, s, n-1)

s:str = "s"
d:str = "d"
e:str = "e"
n:int = 6

tower_of_hanoi(s, d, e, n)