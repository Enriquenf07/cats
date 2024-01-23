export default function numberF(n) {
    if (n == 0) {
        return n
    }
    const num = n.toExponential(2).replace('+', '');
    return num
}