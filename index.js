const employee = {
    name: 'Susan',
    streetAddress: 'Street',
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    const copyOfObj = {...obj};
    copyOfObj[key] = value
    return copyOfObj
  }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const copyOfObj = {...obj}
    delete copyOfObj[key]
    return copyOfObj
  }
  
  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}
