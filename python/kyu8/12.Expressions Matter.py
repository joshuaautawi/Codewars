def expression_matter(a, b, c):
    x = a*b*c
    y = (a+b)*c
    z = a*(b+c)
    n = a+b+c
    return max(x,y,z,n)