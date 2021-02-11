/**
 *
 * @author Arash Alaei <arashalaei22@gmail.com>
 * @since 11/25/2020
 * @class Queue
 */

class Queue<T>{
    private readonly SIZE: number;// Specifies the size of the queue.
    private readonly dataStore: Array<any>;// Holds input data to the queue.
    private head: number;// Points to the head of the queue.
    private tail: number;// Points to the next position to add data.
    private length:number;// Holds length of the queue.

    /**
     *
     * @param SIZE {number} Specifies the size of the queue.
     */
    constructor(SIZE:number) {
        this.SIZE = SIZE;
        this.dataStore = new Array<T>();
        this.head = this.tail = 0;
        this.length = 0;
    }

    /**
     * @description Removes the head element of the queue, and returns that element.
     * @return {Error | T} The head of the stack If successful, else underflow error.
     */
    public deQueue(): Error | T {
        if(this.length === 0){
            return Queue.queueEmpty();
        }else {
            const item:T = this.dataStore[this.head];
            this.head = (this.head + 1) % this.SIZE;
            this.length--;
            return item;
        }
    }

    /**
     * @description Adds new data to the queue.
     * @param data { boolean | T} To be added to the queue.
     * @return True If successful, else overflow error.
     */
    public enQueue(data: T): boolean | Error {
        if(this.length  === this.SIZE){
            return Queue.queueFull();
        }else {
            this.dataStore[this.tail] = data;
            this.tail = (this.tail + 1) % this.SIZE;
            this.length++;
            return true;
        }
    }

    /**
     * @return {number} length of the queue.
     */
    public getLength():number{
        return this.length;
    }

    /**
     * @description Empties the queue.
     */
    public clear():void{
        this.length = 0;
        this.head = this.tail = 0;
    }
    /**
     *
     * @private
     * @return {Error} Underflow error.
     */
    private static queueEmpty():Error{
        return new Error("Underflow");
    }

    /**
     *
     * @private
     * @return {Error} Overflow error.
     */
    private static queueFull():Error{
        return new Error("Overflow");
    }

}

export default Queue;