const inputs =['0001', '0003', '0005', '0003'];
const  printReceipt= require('../main');
const expectText = `Receipts
                    ------------------------------------------------------------
                    Coca Cola                       3          1
                    Pepsi-Cola                      5          2
                    Dr Pepper                       7          1
                    ------------------------------------------------------------
                    Price: 20`;

it ('should return we need to a receipts', () => {
          expect(printReceipt(inputs)).toBe(expectText);
   });