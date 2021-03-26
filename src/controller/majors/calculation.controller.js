
const { handleResSuccess } = require("../../utils/success.util");
const { handleResError } = require("../../utils/err.util");
const { validateShapeData } = require("../../validators/calculation.validator");
const { shapeCalculation } = require("../actions/calculation.action");

const dotenv = require("dotenv");
dotenv.config();

const ShapeCalculationController = async (req, res) => {
  try {
    let { err, value } = validateShapeData(req.body);
    if (err) handleResError(res, err.details[0], 400);
    else {
      let { err, token } = await shapeCalculation(value);
      if (err) handleResError(res, err, 400);
      else handleResSuccess(res, "Shape Calculation Successful", `Bearer ${token}`, 201);
    }
  } catch (e) {
    handleResError(res, e, 400);
  }
};

module.exports = ShapeCalculationController;

