from typing import Tuple
import math

def mag_number(info: Tuple[str, int]) -> int:
    if info[0] == "PT92":
        x = 17
    elif info[0] == "M4A1":
        x = 30
    elif info[0] == "M16A2":
        x = 30
    elif info[0] == "PSG1":
        x = 5        
    n = info[1] * 3
    return math.ceil(n/x)
