// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ItemSold extends ethereum.Event {
  get params(): ItemSold__Params {
    return new ItemSold__Params(this);
  }
}

export class ItemSold__Params {
  _event: ItemSold;

  constructor(event: ItemSold) {
    this._event = event;
  }

  get ownerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propertyAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TransferProperty extends ethereum.SmartContract {
  static bind(address: Address): TransferProperty {
    return new TransferProperty("TransferProperty", address);
  }
}

export class TransferItemCall extends ethereum.Call {
  get inputs(): TransferItemCall__Inputs {
    return new TransferItemCall__Inputs(this);
  }

  get outputs(): TransferItemCall__Outputs {
    return new TransferItemCall__Outputs(this);
  }
}

export class TransferItemCall__Inputs {
  _call: TransferItemCall;

  constructor(call: TransferItemCall) {
    this._call = call;
  }

  get propertyAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ownerAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TransferItemCall__Outputs {
  _call: TransferItemCall;

  constructor(call: TransferItemCall) {
    this._call = call;
  }
}
