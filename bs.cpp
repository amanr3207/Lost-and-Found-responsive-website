#include <iostream>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int target, int low, int high) {
    if (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target) {
            return mid; // Element found
        } else if (arr[mid] < target) {
            // Search in the right half
            return binarySearch(arr, target, mid + 1, high);
        } else {
            // Search in the left half
            return binarySearch(arr, target, low, mid - 1);
        }
    }

    return -1; // Element not found
}

int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    vector<int> arr(n);

    cout << "Enter the elements of the array in sorted order:\n";
    for (int i = 0; i < n; ++i) {
        cout << "Element " << (i + 1) << ": ";
        cin >> arr[i];
    }

    int target;
    cout << "Enter the target element to search for: ";
    cin >> target;

    int result = binarySearch(arr, target, 0, n - 1);

    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }

    return 0;
}
