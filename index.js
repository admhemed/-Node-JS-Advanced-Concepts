import { from } from "rxjs";
import { mergeMap, reduce, toArray, map } from "rxjs/operators";

var foo = from([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

// row sum
foo
  .pipe(
    mergeMap((row) => {
      return from(row).pipe(
        reduce((acc, currentVal) => {
          return acc + currentVal;
        }, 0)
      );
    }),
    reduce((acc, currentVal) => {
      return acc + currentVal;
    }, 0)
  )
  .subscribe(
    function (x) {
      console.log("sum of matrix is " + x);
    },
    function (err) {
      console.log("error " + err);
    },
    function () {
      console.log("done");
    }
  );
