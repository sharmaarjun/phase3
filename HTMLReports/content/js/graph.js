/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 84208.0, "series": [{"data": [[0.0, 223.0], [0.1, 232.0], [0.2, 234.0], [0.3, 235.0], [0.4, 237.0], [0.5, 238.0], [0.6, 239.0], [0.7, 240.0], [0.8, 242.0], [0.9, 244.0], [1.0, 244.0], [1.1, 245.0], [1.2, 246.0], [1.3, 247.0], [1.4, 247.0], [1.5, 247.0], [1.6, 248.0], [1.7, 248.0], [1.8, 248.0], [1.9, 249.0], [2.0, 249.0], [2.1, 250.0], [2.2, 250.0], [2.3, 250.0], [2.4, 250.0], [2.5, 251.0], [2.6, 251.0], [2.7, 252.0], [2.8, 252.0], [2.9, 252.0], [3.0, 253.0], [3.1, 253.0], [3.2, 253.0], [3.3, 253.0], [3.4, 254.0], [3.5, 254.0], [3.6, 255.0], [3.7, 255.0], [3.8, 255.0], [3.9, 255.0], [4.0, 255.0], [4.1, 255.0], [4.2, 256.0], [4.3, 256.0], [4.4, 256.0], [4.5, 257.0], [4.6, 257.0], [4.7, 257.0], [4.8, 257.0], [4.9, 257.0], [5.0, 258.0], [5.1, 258.0], [5.2, 258.0], [5.3, 258.0], [5.4, 259.0], [5.5, 259.0], [5.6, 259.0], [5.7, 260.0], [5.8, 260.0], [5.9, 260.0], [6.0, 260.0], [6.1, 260.0], [6.2, 261.0], [6.3, 261.0], [6.4, 261.0], [6.5, 261.0], [6.6, 261.0], [6.7, 262.0], [6.8, 262.0], [6.9, 262.0], [7.0, 262.0], [7.1, 262.0], [7.2, 263.0], [7.3, 263.0], [7.4, 263.0], [7.5, 263.0], [7.6, 263.0], [7.7, 264.0], [7.8, 264.0], [7.9, 264.0], [8.0, 264.0], [8.1, 264.0], [8.2, 264.0], [8.3, 265.0], [8.4, 265.0], [8.5, 265.0], [8.6, 265.0], [8.7, 265.0], [8.8, 265.0], [8.9, 266.0], [9.0, 266.0], [9.1, 266.0], [9.2, 266.0], [9.3, 266.0], [9.4, 266.0], [9.5, 267.0], [9.6, 267.0], [9.7, 267.0], [9.8, 267.0], [9.9, 268.0], [10.0, 268.0], [10.1, 268.0], [10.2, 268.0], [10.3, 268.0], [10.4, 268.0], [10.5, 269.0], [10.6, 269.0], [10.7, 269.0], [10.8, 269.0], [10.9, 269.0], [11.0, 269.0], [11.1, 269.0], [11.2, 270.0], [11.3, 270.0], [11.4, 270.0], [11.5, 270.0], [11.6, 270.0], [11.7, 270.0], [11.8, 270.0], [11.9, 270.0], [12.0, 271.0], [12.1, 271.0], [12.2, 271.0], [12.3, 271.0], [12.4, 271.0], [12.5, 271.0], [12.6, 271.0], [12.7, 271.0], [12.8, 272.0], [12.9, 272.0], [13.0, 272.0], [13.1, 272.0], [13.2, 272.0], [13.3, 272.0], [13.4, 273.0], [13.5, 273.0], [13.6, 273.0], [13.7, 273.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 273.0], [14.2, 274.0], [14.3, 274.0], [14.4, 274.0], [14.5, 274.0], [14.6, 274.0], [14.7, 274.0], [14.8, 274.0], [14.9, 275.0], [15.0, 275.0], [15.1, 275.0], [15.2, 275.0], [15.3, 275.0], [15.4, 275.0], [15.5, 275.0], [15.6, 276.0], [15.7, 276.0], [15.8, 276.0], [15.9, 276.0], [16.0, 276.0], [16.1, 276.0], [16.2, 276.0], [16.3, 276.0], [16.4, 276.0], [16.5, 277.0], [16.6, 277.0], [16.7, 277.0], [16.8, 277.0], [16.9, 277.0], [17.0, 277.0], [17.1, 277.0], [17.2, 278.0], [17.3, 278.0], [17.4, 278.0], [17.5, 278.0], [17.6, 278.0], [17.7, 278.0], [17.8, 278.0], [17.9, 278.0], [18.0, 279.0], [18.1, 279.0], [18.2, 279.0], [18.3, 279.0], [18.4, 279.0], [18.5, 279.0], [18.6, 279.0], [18.7, 279.0], [18.8, 279.0], [18.9, 280.0], [19.0, 280.0], [19.1, 280.0], [19.2, 280.0], [19.3, 280.0], [19.4, 280.0], [19.5, 280.0], [19.6, 281.0], [19.7, 281.0], [19.8, 281.0], [19.9, 281.0], [20.0, 281.0], [20.1, 281.0], [20.2, 281.0], [20.3, 282.0], [20.4, 282.0], [20.5, 282.0], [20.6, 282.0], [20.7, 282.0], [20.8, 282.0], [20.9, 283.0], [21.0, 283.0], [21.1, 283.0], [21.2, 283.0], [21.3, 283.0], [21.4, 283.0], [21.5, 283.0], [21.6, 283.0], [21.7, 284.0], [21.8, 284.0], [21.9, 284.0], [22.0, 284.0], [22.1, 284.0], [22.2, 284.0], [22.3, 284.0], [22.4, 284.0], [22.5, 284.0], [22.6, 285.0], [22.7, 285.0], [22.8, 285.0], [22.9, 285.0], [23.0, 285.0], [23.1, 285.0], [23.2, 285.0], [23.3, 285.0], [23.4, 285.0], [23.5, 285.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 286.0], [24.0, 286.0], [24.1, 286.0], [24.2, 286.0], [24.3, 286.0], [24.4, 287.0], [24.5, 287.0], [24.6, 287.0], [24.7, 287.0], [24.8, 287.0], [24.9, 287.0], [25.0, 287.0], [25.1, 287.0], [25.2, 288.0], [25.3, 288.0], [25.4, 288.0], [25.5, 288.0], [25.6, 288.0], [25.7, 288.0], [25.8, 289.0], [25.9, 289.0], [26.0, 289.0], [26.1, 289.0], [26.2, 289.0], [26.3, 289.0], [26.4, 289.0], [26.5, 289.0], [26.6, 290.0], [26.7, 290.0], [26.8, 290.0], [26.9, 290.0], [27.0, 290.0], [27.1, 290.0], [27.2, 290.0], [27.3, 291.0], [27.4, 291.0], [27.5, 291.0], [27.6, 291.0], [27.7, 291.0], [27.8, 291.0], [27.9, 291.0], [28.0, 291.0], [28.1, 292.0], [28.2, 292.0], [28.3, 292.0], [28.4, 292.0], [28.5, 292.0], [28.6, 292.0], [28.7, 292.0], [28.8, 293.0], [28.9, 293.0], [29.0, 293.0], [29.1, 293.0], [29.2, 293.0], [29.3, 293.0], [29.4, 293.0], [29.5, 293.0], [29.6, 293.0], [29.7, 294.0], [29.8, 294.0], [29.9, 294.0], [30.0, 294.0], [30.1, 294.0], [30.2, 294.0], [30.3, 294.0], [30.4, 295.0], [30.5, 295.0], [30.6, 295.0], [30.7, 295.0], [30.8, 295.0], [30.9, 295.0], [31.0, 296.0], [31.1, 296.0], [31.2, 296.0], [31.3, 296.0], [31.4, 296.0], [31.5, 296.0], [31.6, 296.0], [31.7, 296.0], [31.8, 297.0], [31.9, 297.0], [32.0, 297.0], [32.1, 297.0], [32.2, 297.0], [32.3, 298.0], [32.4, 298.0], [32.5, 298.0], [32.6, 298.0], [32.7, 298.0], [32.8, 298.0], [32.9, 298.0], [33.0, 298.0], [33.1, 298.0], [33.2, 298.0], [33.3, 299.0], [33.4, 299.0], [33.5, 299.0], [33.6, 299.0], [33.7, 299.0], [33.8, 299.0], [33.9, 299.0], [34.0, 300.0], [34.1, 300.0], [34.2, 300.0], [34.3, 300.0], [34.4, 300.0], [34.5, 300.0], [34.6, 300.0], [34.7, 301.0], [34.8, 301.0], [34.9, 301.0], [35.0, 301.0], [35.1, 301.0], [35.2, 301.0], [35.3, 301.0], [35.4, 302.0], [35.5, 302.0], [35.6, 302.0], [35.7, 302.0], [35.8, 302.0], [35.9, 302.0], [36.0, 302.0], [36.1, 303.0], [36.2, 303.0], [36.3, 303.0], [36.4, 303.0], [36.5, 303.0], [36.6, 303.0], [36.7, 304.0], [36.8, 304.0], [36.9, 304.0], [37.0, 304.0], [37.1, 304.0], [37.2, 304.0], [37.3, 304.0], [37.4, 304.0], [37.5, 305.0], [37.6, 305.0], [37.7, 305.0], [37.8, 305.0], [37.9, 305.0], [38.0, 305.0], [38.1, 305.0], [38.2, 305.0], [38.3, 305.0], [38.4, 306.0], [38.5, 306.0], [38.6, 306.0], [38.7, 306.0], [38.8, 306.0], [38.9, 306.0], [39.0, 306.0], [39.1, 306.0], [39.2, 307.0], [39.3, 307.0], [39.4, 307.0], [39.5, 307.0], [39.6, 307.0], [39.7, 307.0], [39.8, 308.0], [39.9, 308.0], [40.0, 308.0], [40.1, 308.0], [40.2, 308.0], [40.3, 308.0], [40.4, 308.0], [40.5, 309.0], [40.6, 309.0], [40.7, 309.0], [40.8, 309.0], [40.9, 309.0], [41.0, 309.0], [41.1, 309.0], [41.2, 309.0], [41.3, 309.0], [41.4, 309.0], [41.5, 310.0], [41.6, 310.0], [41.7, 310.0], [41.8, 310.0], [41.9, 310.0], [42.0, 310.0], [42.1, 310.0], [42.2, 311.0], [42.3, 311.0], [42.4, 311.0], [42.5, 311.0], [42.6, 311.0], [42.7, 311.0], [42.8, 311.0], [42.9, 311.0], [43.0, 311.0], [43.1, 311.0], [43.2, 311.0], [43.3, 312.0], [43.4, 312.0], [43.5, 312.0], [43.6, 312.0], [43.7, 312.0], [43.8, 312.0], [43.9, 312.0], [44.0, 312.0], [44.1, 312.0], [44.2, 313.0], [44.3, 313.0], [44.4, 313.0], [44.5, 313.0], [44.6, 313.0], [44.7, 313.0], [44.8, 313.0], [44.9, 313.0], [45.0, 313.0], [45.1, 314.0], [45.2, 314.0], [45.3, 314.0], [45.4, 314.0], [45.5, 314.0], [45.6, 314.0], [45.7, 314.0], [45.8, 315.0], [45.9, 315.0], [46.0, 315.0], [46.1, 315.0], [46.2, 315.0], [46.3, 315.0], [46.4, 315.0], [46.5, 315.0], [46.6, 315.0], [46.7, 316.0], [46.8, 316.0], [46.9, 316.0], [47.0, 316.0], [47.1, 316.0], [47.2, 316.0], [47.3, 316.0], [47.4, 316.0], [47.5, 316.0], [47.6, 316.0], [47.7, 317.0], [47.8, 317.0], [47.9, 317.0], [48.0, 317.0], [48.1, 317.0], [48.2, 317.0], [48.3, 317.0], [48.4, 317.0], [48.5, 317.0], [48.6, 318.0], [48.7, 318.0], [48.8, 318.0], [48.9, 318.0], [49.0, 318.0], [49.1, 318.0], [49.2, 318.0], [49.3, 318.0], [49.4, 318.0], [49.5, 318.0], [49.6, 319.0], [49.7, 319.0], [49.8, 319.0], [49.9, 319.0], [50.0, 319.0], [50.1, 319.0], [50.2, 319.0], [50.3, 320.0], [50.4, 320.0], [50.5, 320.0], [50.6, 320.0], [50.7, 320.0], [50.8, 320.0], [50.9, 320.0], [51.0, 321.0], [51.1, 321.0], [51.2, 321.0], [51.3, 321.0], [51.4, 321.0], [51.5, 321.0], [51.6, 321.0], [51.7, 322.0], [51.8, 322.0], [51.9, 322.0], [52.0, 322.0], [52.1, 322.0], [52.2, 322.0], [52.3, 322.0], [52.4, 322.0], [52.5, 322.0], [52.6, 323.0], [52.7, 323.0], [52.8, 323.0], [52.9, 323.0], [53.0, 323.0], [53.1, 323.0], [53.2, 323.0], [53.3, 323.0], [53.4, 324.0], [53.5, 324.0], [53.6, 324.0], [53.7, 324.0], [53.8, 324.0], [53.9, 324.0], [54.0, 325.0], [54.1, 325.0], [54.2, 325.0], [54.3, 325.0], [54.4, 325.0], [54.5, 325.0], [54.6, 325.0], [54.7, 326.0], [54.8, 326.0], [54.9, 326.0], [55.0, 326.0], [55.1, 326.0], [55.2, 326.0], [55.3, 327.0], [55.4, 327.0], [55.5, 327.0], [55.6, 327.0], [55.7, 327.0], [55.8, 327.0], [55.9, 327.0], [56.0, 327.0], [56.1, 327.0], [56.2, 328.0], [56.3, 328.0], [56.4, 328.0], [56.5, 328.0], [56.6, 328.0], [56.7, 328.0], [56.8, 329.0], [56.9, 329.0], [57.0, 329.0], [57.1, 329.0], [57.2, 329.0], [57.3, 329.0], [57.4, 329.0], [57.5, 330.0], [57.6, 330.0], [57.7, 330.0], [57.8, 330.0], [57.9, 330.0], [58.0, 330.0], [58.1, 330.0], [58.2, 330.0], [58.3, 331.0], [58.4, 331.0], [58.5, 331.0], [58.6, 331.0], [58.7, 331.0], [58.8, 331.0], [58.9, 331.0], [59.0, 331.0], [59.1, 331.0], [59.2, 332.0], [59.3, 332.0], [59.4, 332.0], [59.5, 332.0], [59.6, 332.0], [59.7, 332.0], [59.8, 333.0], [59.9, 333.0], [60.0, 333.0], [60.1, 333.0], [60.2, 333.0], [60.3, 333.0], [60.4, 334.0], [60.5, 334.0], [60.6, 334.0], [60.7, 334.0], [60.8, 334.0], [60.9, 334.0], [61.0, 334.0], [61.1, 334.0], [61.2, 334.0], [61.3, 334.0], [61.4, 335.0], [61.5, 335.0], [61.6, 335.0], [61.7, 335.0], [61.8, 335.0], [61.9, 335.0], [62.0, 335.0], [62.1, 335.0], [62.2, 336.0], [62.3, 336.0], [62.4, 336.0], [62.5, 336.0], [62.6, 336.0], [62.7, 336.0], [62.8, 336.0], [62.9, 336.0], [63.0, 337.0], [63.1, 337.0], [63.2, 337.0], [63.3, 337.0], [63.4, 337.0], [63.5, 337.0], [63.6, 337.0], [63.7, 338.0], [63.8, 338.0], [63.9, 338.0], [64.0, 338.0], [64.1, 338.0], [64.2, 338.0], [64.3, 339.0], [64.4, 339.0], [64.5, 339.0], [64.6, 339.0], [64.7, 339.0], [64.8, 339.0], [64.9, 339.0], [65.0, 339.0], [65.1, 340.0], [65.2, 340.0], [65.3, 340.0], [65.4, 340.0], [65.5, 340.0], [65.6, 340.0], [65.7, 341.0], [65.8, 341.0], [65.9, 341.0], [66.0, 341.0], [66.1, 341.0], [66.2, 341.0], [66.3, 341.0], [66.4, 341.0], [66.5, 342.0], [66.6, 342.0], [66.7, 342.0], [66.8, 342.0], [66.9, 342.0], [67.0, 342.0], [67.1, 342.0], [67.2, 343.0], [67.3, 343.0], [67.4, 343.0], [67.5, 343.0], [67.6, 343.0], [67.7, 343.0], [67.8, 344.0], [67.9, 344.0], [68.0, 344.0], [68.1, 344.0], [68.2, 344.0], [68.3, 345.0], [68.4, 345.0], [68.5, 345.0], [68.6, 345.0], [68.7, 345.0], [68.8, 346.0], [68.9, 346.0], [69.0, 346.0], [69.1, 346.0], [69.2, 346.0], [69.3, 346.0], [69.4, 347.0], [69.5, 347.0], [69.6, 347.0], [69.7, 347.0], [69.8, 347.0], [69.9, 347.0], [70.0, 348.0], [70.1, 348.0], [70.2, 348.0], [70.3, 348.0], [70.4, 349.0], [70.5, 349.0], [70.6, 349.0], [70.7, 349.0], [70.8, 349.0], [70.9, 349.0], [71.0, 350.0], [71.1, 350.0], [71.2, 350.0], [71.3, 350.0], [71.4, 350.0], [71.5, 351.0], [71.6, 351.0], [71.7, 351.0], [71.8, 351.0], [71.9, 351.0], [72.0, 351.0], [72.1, 352.0], [72.2, 352.0], [72.3, 352.0], [72.4, 352.0], [72.5, 352.0], [72.6, 353.0], [72.7, 353.0], [72.8, 353.0], [72.9, 353.0], [73.0, 353.0], [73.1, 354.0], [73.2, 354.0], [73.3, 354.0], [73.4, 354.0], [73.5, 354.0], [73.6, 355.0], [73.7, 355.0], [73.8, 355.0], [73.9, 355.0], [74.0, 355.0], [74.1, 356.0], [74.2, 356.0], [74.3, 356.0], [74.4, 357.0], [74.5, 357.0], [74.6, 357.0], [74.7, 358.0], [74.8, 358.0], [74.9, 358.0], [75.0, 358.0], [75.1, 359.0], [75.2, 359.0], [75.3, 359.0], [75.4, 359.0], [75.5, 360.0], [75.6, 360.0], [75.7, 360.0], [75.8, 360.0], [75.9, 361.0], [76.0, 361.0], [76.1, 361.0], [76.2, 361.0], [76.3, 362.0], [76.4, 362.0], [76.5, 362.0], [76.6, 362.0], [76.7, 362.0], [76.8, 363.0], [76.9, 363.0], [77.0, 364.0], [77.1, 364.0], [77.2, 364.0], [77.3, 364.0], [77.4, 365.0], [77.5, 365.0], [77.6, 365.0], [77.7, 366.0], [77.8, 366.0], [77.9, 366.0], [78.0, 366.0], [78.1, 367.0], [78.2, 367.0], [78.3, 367.0], [78.4, 367.0], [78.5, 368.0], [78.6, 368.0], [78.7, 368.0], [78.8, 368.0], [78.9, 369.0], [79.0, 369.0], [79.1, 369.0], [79.2, 369.0], [79.3, 370.0], [79.4, 370.0], [79.5, 370.0], [79.6, 370.0], [79.7, 371.0], [79.8, 371.0], [79.9, 371.0], [80.0, 372.0], [80.1, 373.0], [80.2, 373.0], [80.3, 373.0], [80.4, 374.0], [80.5, 374.0], [80.6, 374.0], [80.7, 374.0], [80.8, 375.0], [80.9, 375.0], [81.0, 375.0], [81.1, 376.0], [81.2, 376.0], [81.3, 377.0], [81.4, 377.0], [81.5, 378.0], [81.6, 378.0], [81.7, 379.0], [81.8, 379.0], [81.9, 379.0], [82.0, 380.0], [82.1, 380.0], [82.2, 381.0], [82.3, 381.0], [82.4, 382.0], [82.5, 382.0], [82.6, 383.0], [82.7, 384.0], [82.8, 384.0], [82.9, 384.0], [83.0, 385.0], [83.1, 385.0], [83.2, 385.0], [83.3, 386.0], [83.4, 386.0], [83.5, 387.0], [83.6, 387.0], [83.7, 388.0], [83.8, 388.0], [83.9, 389.0], [84.0, 389.0], [84.1, 390.0], [84.2, 390.0], [84.3, 391.0], [84.4, 392.0], [84.5, 393.0], [84.6, 393.0], [84.7, 394.0], [84.8, 396.0], [84.9, 396.0], [85.0, 397.0], [85.1, 398.0], [85.2, 400.0], [85.3, 400.0], [85.4, 401.0], [85.5, 402.0], [85.6, 403.0], [85.7, 404.0], [85.8, 405.0], [85.9, 406.0], [86.0, 406.0], [86.1, 407.0], [86.2, 409.0], [86.3, 409.0], [86.4, 411.0], [86.5, 412.0], [86.6, 416.0], [86.7, 417.0], [86.8, 418.0], [86.9, 419.0], [87.0, 421.0], [87.1, 421.0], [87.2, 424.0], [87.3, 427.0], [87.4, 432.0], [87.5, 436.0], [87.6, 441.0], [87.7, 452.0], [87.8, 497.0], [87.9, 550.0], [88.0, 556.0], [88.1, 563.0], [88.2, 570.0], [88.3, 575.0], [88.4, 582.0], [88.5, 589.0], [88.6, 601.0], [88.7, 605.0], [88.8, 610.0], [88.9, 614.0], [89.0, 626.0], [89.1, 632.0], [89.2, 640.0], [89.3, 654.0], [89.4, 661.0], [89.5, 709.0], [89.6, 860.0], [89.7, 1241.0], [89.8, 1255.0], [89.9, 1269.0], [90.0, 1274.0], [90.1, 1277.0], [90.2, 1278.0], [90.3, 1280.0], [90.4, 1283.0], [90.5, 1285.0], [90.6, 1286.0], [90.7, 1288.0], [90.8, 1290.0], [90.9, 1291.0], [91.0, 1292.0], [91.1, 1295.0], [91.2, 1298.0], [91.3, 1300.0], [91.4, 1302.0], [91.5, 1303.0], [91.6, 1305.0], [91.7, 1307.0], [91.8, 1310.0], [91.9, 1313.0], [92.0, 1315.0], [92.1, 1316.0], [92.2, 1319.0], [92.3, 1321.0], [92.4, 1323.0], [92.5, 1325.0], [92.6, 1327.0], [92.7, 1329.0], [92.8, 1334.0], [92.9, 1336.0], [93.0, 1339.0], [93.1, 1341.0], [93.2, 1344.0], [93.3, 1347.0], [93.4, 1349.0], [93.5, 1351.0], [93.6, 1352.0], [93.7, 1357.0], [93.8, 1360.0], [93.9, 1365.0], [94.0, 1369.0], [94.1, 1373.0], [94.2, 1377.0], [94.3, 1383.0], [94.4, 1393.0], [94.5, 1405.0], [94.6, 1415.0], [94.7, 1417.0], [94.8, 1793.0], [94.9, 3271.0], [95.0, 3282.0], [95.1, 3285.0], [95.2, 3306.0], [95.3, 3309.0], [95.4, 3315.0], [95.5, 3322.0], [95.6, 3326.0], [95.7, 3330.0], [95.8, 3335.0], [95.9, 3347.0], [96.0, 3355.0], [96.1, 3370.0], [96.2, 3384.0], [96.3, 3595.0], [96.4, 7282.0], [96.5, 7316.0], [96.6, 7330.0], [96.7, 7364.0], [96.8, 7677.0], [96.9, 15320.0], [97.0, 15376.0], [97.1, 15402.0], [97.2, 21406.0], [97.3, 21430.0], [97.4, 21434.0], [97.5, 21441.0], [97.6, 21453.0], [97.7, 21458.0], [97.8, 21470.0], [97.9, 21480.0], [98.0, 21492.0], [98.1, 22415.0], [98.2, 28437.0], [98.3, 42386.0], [98.4, 49466.0], [98.5, 57419.0], [98.6, 57456.0], [98.7, 63331.0], [98.8, 63411.0], [98.9, 63440.0], [99.0, 63454.0], [99.1, 63476.0], [99.2, 63532.0], [99.3, 64400.0], [99.4, 66430.0], [99.5, 70458.0], [99.6, 78499.0], [99.7, 84167.0], [99.8, 84179.0], [99.9, 84186.0]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2028.0, "series": [{"data": [[600.0, 35.0], [700.0, 5.0], [800.0, 1.0], [900.0, 3.0], [1200.0, 61.0], [1300.0, 128.0], [1400.0, 12.0], [1600.0, 1.0], [1700.0, 1.0], [2700.0, 1.0], [3300.0, 41.0], [3200.0, 13.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [70500.0, 2.0], [78300.0, 1.0], [78500.0, 1.0], [84100.0, 13.0], [7300.0, 13.0], [7200.0, 4.0], [7600.0, 1.0], [15300.0, 9.0], [15200.0, 2.0], [15400.0, 3.0], [21400.0, 33.0], [21500.0, 1.0], [21300.0, 1.0], [22400.0, 4.0], [24400.0, 1.0], [28400.0, 1.0], [36500.0, 1.0], [36400.0, 1.0], [42300.0, 3.0], [45300.0, 1.0], [49400.0, 2.0], [200.0, 1343.0], [57300.0, 3.0], [57400.0, 8.0], [63300.0, 3.0], [63400.0, 14.0], [64300.0, 1.0], [63500.0, 6.0], [64400.0, 3.0], [64500.0, 1.0], [66400.0, 3.0], [70400.0, 2.0], [300.0, 2028.0], [78400.0, 1.0], [84200.0, 1.0], [400.0, 104.0], [500.0, 30.0]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 84200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3475.0, "series": [{"data": [[0.0, 3475.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 275.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 193.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 14.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 17.030303030303035, "minX": 1.6223079E12, "maxY": 44.128205128205124, "series": [{"data": [[1.6223079E12, 17.478260869565197], [1.62230802E12, 29.325079030558488], [1.62230814E12, 17.030303030303035], [1.62230796E12, 44.128205128205124], [1.62230808E12, 24.327272727272728]], "isOverall": false, "label": "jp@gc - Stress Testing", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62230814E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 63508.0, "series": [{"data": [[33.0, 1265.9268292682916], [32.0, 1935.5839999999998], [2.0, 57456.0], [35.0, 743.9999999999999], [34.0, 5993.298969072163], [37.0, 22665.833333333336], [36.0, 7407.518518518518], [38.0, 17277.8], [39.0, 42240.5], [41.0, 42733.0], [40.0, 29280.5], [43.0, 18131.833333333336], [42.0, 21311.4], [45.0, 313.0], [44.0, 13870.89247311828], [47.0, 21469.0], [46.0, 20240.2], [48.0, 10860.5], [3.0, 63456.0], [4.0, 63508.0], [5.0, 684.0897435897435], [6.0, 4519.866666666667], [7.0, 2963.083333333333], [8.0, 2649.0], [9.0, 2957.375], [10.0, 659.5401069518716], [11.0, 335.75], [12.0, 3812.3333333333335], [13.0, 1724.4888888888888], [14.0, 1798.3023255813955], [15.0, 1641.659574468085], [16.0, 2142.608695652174], [1.0, 57428.0], [17.0, 1288.8833333333334], [18.0, 1496.387755102041], [19.0, 1242.258064516129], [20.0, 410.5528120713304], [21.0, 857.9881656804735], [22.0, 803.2499999999998], [23.0, 1450.9148936170213], [24.0, 662.9758454106279], [25.0, 1207.8527918781724], [26.0, 934.8524590163935], [27.0, 979.8508287292814], [28.0, 859.1707317073167], [29.0, 941.9153439153441], [30.0, 679.689655172414], [31.0, 7805.5]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}, {"data": [[23.514783927217582, 1897.4455395501636]], "isOverall": false, "label": "HTTP Request-Stress-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 69.33333333333333, "minX": 1.6223079E12, "maxY": 62633.03333333333, "series": [{"data": [[1.6223079E12, 62633.03333333333], [1.62230802E12, 61784.6], [1.62230814E12, 1095.1666666666667], [1.62230796E12, 1264.2333333333333], [1.62230808E12, 1783.0666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6223079E12, 4186.0], [1.62230802E12, 4084.1666666666665], [1.62230814E12, 69.33333333333333], [1.62230796E12, 84.5], [1.62230808E12, 119.16666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62230814E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 326.7003105590063, "minX": 1.6223079E12, "maxY": 50459.0, "series": [{"data": [[1.6223079E12, 326.7003105590063], [1.62230802E12, 2203.8798735511104], [1.62230814E12, 50459.0], [1.62230796E12, 12053.051282051281], [1.62230808E12, 10160.490909090906]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62230814E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 326.3607660455482, "minX": 1.6223079E12, "maxY": 47907.15151515151, "series": [{"data": [[1.6223079E12, 326.3607660455482], [1.62230802E12, 1627.0379346680738], [1.62230814E12, 47907.15151515151], [1.62230796E12, 12052.307692307691], [1.62230808E12, 10160.218181818178]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62230814E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 245.96014492753616, "minX": 1.6223079E12, "maxY": 50384.45454545454, "series": [{"data": [[1.6223079E12, 245.96014492753616], [1.62230802E12, 2122.7381454162314], [1.62230814E12, 50384.45454545454], [1.62230796E12, 11964.358974358976], [1.62230808E12, 10078.89090909091]], "isOverall": false, "label": "HTTP Request-Stress", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62230814E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 223.0, "minX": 1.6223079E12, "maxY": 78517.0, "series": [{"data": [[1.6223079E12, 3778.0], [1.62230802E12, 78517.0], [1.62230814E12, 70458.0], [1.62230796E12, 24430.0], [1.62230808E12, 57426.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6223079E12, 369.70000000000005], [1.62230802E12, 1322.4], [1.62230814E12, 63538.3], [1.62230796E12, 21498.0], [1.62230808E12, 21470.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6223079E12, 646.7000000000007], [1.62230802E12, 63444.54], [1.62230814E12, 70458.0], [1.62230796E12, 24430.0], [1.62230808E12, 57426.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6223079E12, 398.0], [1.62230802E12, 3285.0], [1.62230814E12, 65987.94999999998], [1.62230796E12, 22415.0], [1.62230808E12, 22414.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6223079E12, 223.0], [1.62230802E12, 232.0], [1.62230814E12, 15291.0], [1.62230796E12, 248.0], [1.62230808E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6223079E12, 310.0], [1.62230802E12, 329.0], [1.62230814E12, 57423.5], [1.62230796E12, 15389.0], [1.62230808E12, 3352.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62230814E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 283.5, "minX": 1.0, "maxY": 84197.0, "series": [{"data": [[2.0, 1321.0], [3.0, 2313.0], [4.0, 12339.0], [5.0, 341.0], [6.0, 1281.5], [7.0, 11391.0], [9.0, 344.0], [11.0, 63451.0], [12.0, 327.0], [14.0, 348.0], [15.0, 313.0], [16.0, 838.0], [17.0, 326.0], [18.0, 298.0], [19.0, 312.0], [20.0, 329.0], [21.0, 326.0], [24.0, 283.5], [25.0, 359.0], [26.0, 308.0], [28.0, 333.0], [29.0, 324.0], [30.0, 333.5], [31.0, 320.0], [32.0, 315.0], [33.0, 311.0], [37.0, 311.0], [39.0, 351.0], [40.0, 313.5], [43.0, 335.0], [45.0, 307.5], [44.0, 341.5], [48.0, 312.0], [50.0, 298.0], [53.0, 316.0], [54.0, 319.5], [55.0, 315.0], [56.0, 294.0], [59.0, 326.0], [61.0, 306.0], [60.0, 340.0], [63.0, 317.0], [62.0, 323.5], [66.0, 305.5], [67.0, 314.0], [65.0, 317.0], [64.0, 319.5], [68.0, 305.0], [71.0, 308.0], [69.0, 316.0], [73.0, 327.0], [1.0, 3349.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 84164.5], [39.0, 84185.0], [3.0, 84197.0], [26.0, 84179.0], [29.0, 84163.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 63451.0, "series": [{"data": [[2.0, 1321.0], [3.0, 2313.0], [4.0, 12339.0], [5.0, 340.0], [6.0, 1281.5], [7.0, 11389.5], [9.0, 343.5], [11.0, 63451.0], [12.0, 327.0], [14.0, 347.0], [15.0, 312.0], [16.0, 837.5], [17.0, 325.0], [18.0, 296.0], [19.0, 312.0], [20.0, 329.0], [21.0, 324.0], [24.0, 283.0], [25.0, 358.0], [26.0, 308.0], [28.0, 333.0], [29.0, 324.0], [30.0, 333.0], [31.0, 320.0], [32.0, 315.0], [33.0, 311.0], [37.0, 311.0], [39.0, 351.0], [40.0, 313.5], [43.0, 335.0], [45.0, 307.5], [44.0, 341.0], [48.0, 312.0], [50.0, 298.0], [53.0, 316.0], [54.0, 319.5], [55.0, 314.0], [56.0, 294.0], [59.0, 326.0], [61.0, 306.0], [60.0, 340.0], [63.0, 316.5], [62.0, 323.5], [66.0, 305.5], [67.0, 314.0], [65.0, 317.0], [64.0, 319.5], [68.0, 305.0], [71.0, 308.0], [69.0, 316.0], [73.0, 326.0], [1.0, 3349.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 0.0], [39.0, 0.0], [3.0, 0.0], [26.0, 0.0], [29.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62230784E12, "maxY": 32.88333333333333, "series": [{"data": [[1.6223079E12, 32.88333333333333], [1.62230802E12, 31.366666666666667], [1.62230784E12, 0.016666666666666666], [1.62230796E12, 0.6833333333333333], [1.62230808E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62230808E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6223079E12, "maxY": 32.2, "series": [{"data": [[1.6223079E12, 32.2], [1.62230802E12, 31.416666666666668], [1.62230814E12, 0.5333333333333333], [1.62230796E12, 0.65], [1.62230808E12, 0.9166666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62230802E12, 0.21666666666666667], [1.62230814E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62230814E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6223079E12, "maxY": 32.2, "series": [{"data": [[1.62230802E12, 0.21666666666666667], [1.62230814E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-Stress-failure", "isController": false}, {"data": [[1.6223079E12, 32.2], [1.62230802E12, 31.416666666666668], [1.62230814E12, 0.5333333333333333], [1.62230796E12, 0.65], [1.62230808E12, 0.9166666666666666]], "isOverall": false, "label": "HTTP Request-Stress-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62230814E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6223079E12, "maxY": 32.2, "series": [{"data": [[1.6223079E12, 32.2], [1.62230802E12, 31.416666666666668], [1.62230814E12, 0.5333333333333333], [1.62230796E12, 0.65], [1.62230808E12, 0.9166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62230802E12, 0.21666666666666667], [1.62230814E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62230814E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

