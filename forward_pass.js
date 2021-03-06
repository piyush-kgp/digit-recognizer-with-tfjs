function NeuralNet() {
  // Create a sequential neural network model. tf.sequential provides an API
  // for creating "stacked" models where the output from one layer is used as
  // the input to the next layer.
  const model = tf.sequential();
  model.add(tf.layers.flatten({inputShape: [28, 28]}));
  model.add(tf.layers.dense({units: 512, activation: 'relu'}));
  model.add(tf.layers.dropout({rate: 0.2}));
  model.add(tf.layers.dense({units: 10, activation: 'softmax'}));

  // Our last layer is a dense layer which has 10 output units, one for each
  // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Here the classes actually
  // represent numbers, but it's the same idea if you had classes that
  // represented other entities like dogs and cats (two output classes: 0, 1).
  // We use the softmax function as the activation for the output layer as it
  // creates a probability distribution over our 10 classes so their output
  // values sum to 1.

  console.log(model);

  return model;
}

const model = tf.Sequential();
