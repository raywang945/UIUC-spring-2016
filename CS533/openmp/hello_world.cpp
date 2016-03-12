#include <iostream>
#include <omp.h>

using namespace std;

int main() {
    #pragma omp parallel
    {
        int ID = omp_get_thread_num();
        cout << "This is thread " << ID << endl;
    }
    return 0;
}
