stuff = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}

def display_inventory(inventory):
    print("Inventory:")
    item_total = 0
    for k, v in inventory.items():
        print(str(v) + ' ' + k)
        item_total += v
    print("\nTotal number of items: " + str(item_total))

#display_inventory(stuff)

def add_to_inventory(inventory, addeditems):
    for item in addeditems:
        if item in inventory.keys():    # checking if item exists in inventory
            inventory[item] = inventory.get(item, 0) + 1
        else:
            inventory.setdefault(item, 1)
    return inventory


inv = {'gold coin': 42, 'rope': 1}
dragonloot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

inv = add_to_inventory(inv, dragonloot)
display_inventory(inv)

