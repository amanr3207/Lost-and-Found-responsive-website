#include <iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    int arr[n];

    cout << "Enter the elements of the array in sorted order:\n";
    for (int i = 0; i < n; ++i) {
        cout << "Element " << (i + 1) << ": ";
        cin >> arr[i];
    }

        cout<<" Array: ";
     for (int i = 0; i < n; ++i) {

        cout << arr[i];
        cout<< " ";
    }

    int target;
    cout << "\n Enter the target element to search for: ";
    cin >> target;

    int low = 0;
    int high = n - 1;
    int result = -1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target) {
            result = mid; // Element found
            break;
        } else if (arr[mid] < target) {
            // Search in the right half
            low = mid + 1;
        } else {
            // Search in the left half
            high = mid - 1;
        }
    }

    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }

    return 0;
}
